<script lang="ts" setup>
import { ref, watch } from "vue";
import { useRealEstateStore } from "@/stores/realEstate.ts";
import { formatDate } from "@/utils";

import Pagination from "@/components/ui/Pagination.vue";
import ModalConfirmation from "@/components/ui/ModalConfirmation.vue";

const realEstateStore = useRealEstateStore();

const page = ref(1);
const searchValue = ref("");
const currentFilter = ref<RealEstateFilters>("");
const totalPages = ref(0);
const docs = ref<RealEstate[]>([]);
const currentCategoryId = ref<string>("");
const isModalDelete = ref(false);

const filters: { value: RealEstateFilters; title: string }[] = [
  {
    value: "id",
    title: "Id",
  },
  {
    value: "address",
    title: "Address",
  },
  {
    value: "createdAt",
    title: "Created at",
  },
];

const changeCurrentId = (value: string) => {
  currentCategoryId.value = value;
};
const switchModalDelete = (value: boolean, id: string) => {
  if (value) {
    changeCurrentId(id);
  }
  isModalDelete.value = value;
};

const changeFilter = (filterKey: RealEstateFilters) => {
  currentFilter.value = filterKey;
};

const getDocuments = async () => {
  const { documents, totalPages: total } =
    await realEstateStore.getItemsByFilters(page.value, {
      filterValue: searchValue.value,
      filterKey: currentFilter.value,
    });
  docs.value = documents || [];
  totalPages.value = total;
};

const deleteCategory = async (documentId: Customer["id"]) => {
  await realEstateStore.deleteDocument(documentId);
  await getDocuments();
  switchModalDelete(false, "");
};

watch(
  [page, searchValue],
  () => {
    getDocuments();
  },
  { deep: true }
);

getDocuments();
</script>

<template>
  <div class="d-flex align-items-center mb-3">
    <ModalConfirmation
      @actionSuccess="deleteCategory(currentCategoryId)"
      v-model="isModalDelete"
      :title="'Delete a customer?'"
    ></ModalConfirmation>
    <!-- <button @">load more</button> -->
    <div>
      <ul class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">PAGES</a></li>
        <li class="breadcrumb-item active text-uppercase">Real estate</li>
      </ul>
      <h1 class="page-header mb-0">Real estate</h1>
      <!-- {{ totalPages }} -->
    </div>

    <div class="ms-auto">
      <RouterLink to="/real-estate-create" href="#" class="btn btn-theme"
        ><i class="fa fa-plus-circle fa-fw me-1"></i> Create Real
        estate</RouterLink
      >
    </div>
  </div>

  <card>
    <div class="tab-content p-4">
      <div class="tab-pane fade show active" id="allTab">
        <!-- BEGIN input-group -->
        <div class="input-group mb-4">
          <button
            class="btn btn-default dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {{
              filters.find((el) => currentFilter == el.value)?.title ||
              "Filter real estate"
            }}
            &nbsp;
          </button>
          <div class="dropdown-menu">
            <button
              class="dropdown-item"
              @click="changeFilter(filter.value)"
              v-for="filter in filters"
              :key="filter.value"
            >
              {{ filter.title }}
            </button>
          </div>
          <div class="flex-fill position-relative">
            <div class="input-group">
              <div
                class="input-group-text position-absolute top-0 bottom-0 bg-none border-0"
                style="z-index: 1020"
              >
                <i class="fa fa-search opacity-5"></i>
              </div>
              <input
                v-model="searchValue"
                type="text"
                class="form-control ps-35px"
                placeholder="Search products"
              />
            </div>
          </div>
        </div>
        <!-- END input-group -->

        <!-- BEGIN table -->
        <div class="table-responsive">
          <table class="table table-hover text-nowrap">
            <thead>
              <tr>
                <th class="pt-0 pb-2">Id</th>
                <th class="pt-0 pb-2">Address</th>
                <th class="pt-0 pb-2">User</th>
                <th class="pt-0 pb-2">Company developer</th>
                <th class="pt-0 pb-2">Created At</th>
                <th class="pt-0 pb-2"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(realEstate, index) in docs"
                :key="realEstate.id || index"
              >
                <td class="align-middle">{{ realEstate?.id }}</td>
                <td class="align-middle">
                  <div class="">
                    <RouterLink :to="/real-estate-update/ + realEstate?.id">{{
                      realEstate.address
                    }}</RouterLink>
                  </div>
                </td>

                <td class="align-middle">
                  {{ realEstate?.user?.name || "null" }}
                </td>
                <td class="align-middle">
                  {{ realEstate?.developerDetails?.companyDeveloper || "null" }}
                </td>
                <td class="align-middle">
                  {{
                    realEstate.createdAt ? formatDate(realEstate.createdAt) : ""
                  }}
                </td>
                <td class="align-middle">
                  <button
                    @click="switchModalDelete(true, realEstate?.id)"
                    class="btn btn-light"
                  >
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- END table -->

        <Pagination
          class="justify-content-center mt-2"
          v-model:currentPage="page"
          :quantityPages="totalPages"
        ></Pagination>
      </div>
    </div>
  </card>
</template>

<style>
.icon {
  width: 50%;
  height: 40%;
  fill: var(--bs-theme);
}
</style>
